type Props = { source?: string; model: string };

const Image = ({ source, model }: Props) => {
  return (
    <img
      className="img-fluid rounded"
      src={source ? `https://spring-render-ucd3.onrender.com/assets/${model}/${source}` : ""}
    ></img>
  );
};

export default Image;
