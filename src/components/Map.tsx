const Map = () => {
  const url = `https://www.google.com/maps/embed/v1/place?key=${
    import.meta.env.VITE_APIKEY_MAP
  }
    &q=Parque+de+El+Poblado`;
  return (
    <iframe
      width="832"
      height="516"
      style={{ border: 0 }}
      loading="lazy"
      src={url}
    ></iframe>
  );
};
export { Map };
