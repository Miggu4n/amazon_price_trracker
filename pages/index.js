import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";

import Head from "next/head";

import {
  Main,
  Form,
  Label,
  Input,
  Button,
  Link,
  Item,
  Title,
  ActualPrice,
  Elimina,
  Delete,
} from "../styles/";

import { Visit } from "../styles/";

const timeout = 1;

function ItemComponent({
  itemIndex,
  link,
  maxPrice,
  changeMaxPrice,
  deleteItem,
}) {
  // const [liveTracking, setLiveTracking] = useState(true);
  const [scrapedInfo, setScrapedInfo] = useState({});

  const getPrice = async () => {
    try {
      const { data } = await axios.post(`http://localhost:3000/api/getprice`, {
        link,
      });

      const { item } = data;

      setScrapedInfo(item);
    } catch (e) {
      console.log(e);
    }
  };
  const debouncedGetPrice = useDebouncedCallback(getPrice, 1000 * timeout);

  useEffect(() => {
    getPrice();
  }, []);

  useEffect(() => {
    // if (liveTracking) return debouncedGetPrice();
    debouncedGetPrice();
  });

  return !scrapedInfo.name ? (
    <Item>
      <Link target="_blank" href={link}>
        <Visit />
      </Link>
      <Title>Non disponibile / Prezzo non trovato</Title>
      <Elimina onClick={() => deleteItem(itemIndex)}>
        <Delete />
      </Elimina>
    </Item>
  ) : (
    <Item conviene={scrapedInfo.price <= maxPrice ? true : false}>
      <Link target="_blank" href={link}>
        <Visit />
      </Link>
      <Title>{scrapedInfo.name}</Title>

      <ActualPrice>{scrapedInfo.price}€</ActualPrice>
      <Label>
        Prezzo massimo:
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => changeMaxPrice(itemIndex, e.target.value)}
        />
      </Label>
      {/* <Label>
        Live tracking
        <Input
          type="checkbox"
          checked={liveTracking}
          onChange={() => setLiveTracking(!liveTracking)}
        />
      </Label> */}
      <Elimina onClick={() => deleteItem(itemIndex)}>
        <Delete />
      </Elimina>
    </Item>
  );
}

export default function Home() {
  const [items, setItems] = useState([]);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      link: "",
      maxPrice: 0,
    },
    onSubmit: (v) => {
      setItems([...items, v]);
    },
  });

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("items"));
    if (localItems) return setItems(localItems);
    localStorage.setItem("items", JSON.stringify(items));
  }, []);

  useEffect(() => {
    const toLocal = JSON.stringify(items);
    localStorage.setItem("items", toLocal);
  }, [items]);

  const changeMaxPrice = (itemIndex, newValue) => {
    const newItemValue = { ...items[itemIndex], maxPrice: newValue };
    const newItems = [...items];
    newItems[itemIndex] = newItemValue;
    setItems(newItems);
  };

  const deleteItem = (itemIndex) => {
    const newItems = [...items];
    newItems.splice(itemIndex, 1);
    setItems(newItems);
  };

  return (
    <div>
      <Head>
        <title>Amazon price tracker</title>
      </Head>

      <Main>
        <Form onSubmit={handleSubmit}>
          <Label>
            Link del prodotto:
            <Input
              type="text"
              name="link"
              value={values.link}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Prezzo massimo:
            <Input
              type="number"
              name="maxPrice"
              value={values.maxPrice}
              onChange={handleChange}
            />
          </Label>

          <Button type="submit">Aggiungi prodotto</Button>
        </Form>

        {items.map(({ link, maxPrice }, itemIndex) => (
          <ItemComponent
            link={link}
            maxPrice={maxPrice}
            key={link}
            itemIndex={itemIndex}
            changeMaxPrice={changeMaxPrice}
            deleteItem={deleteItem}
          />
        ))}
      </Main>
    </div>
  );
}
