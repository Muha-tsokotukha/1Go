import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export const Search = ({ data }) => {
  const [variants, setVariants] = useState(data);
  const [isActive, setIsActive] = useState(true);

  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          border: "1px solid black",
          height: "35px",
          zIndex: "100",
        }}
      >
        <input
          placeholder="Поиск..."
          style={{ outline: "none", border: "none" }}
          onClick={() => setIsActive(true)}
          onChange={(e) => {
            const d = data.filter((item) =>
              item.title.includes(e.target.value)
            );
            console.log(d);
            if (d.length > 0) setIsActive(true);
            else setIsActive(false);
            if (e.target.value.length > 0) setIsActive(true);
            else setIsActive(false);
            setVariants(d);
          }}
        />
        {isActive ? (
          <CloseIcon
            color="primary"
            onClick={() => setIsActive(false)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <SearchIcon color="primary" onClick={() => setIsActive(true)} />
        )}
      </div>

      {isActive && variants.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            display: "grid",
            gap: "10px",
            maxWidth: "192px",
            backgroundColor: "white",
            zIndex: "99",
            padding: "5px",
          }}
        >
          {variants.slice(0, 5).map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ))}
        </div>
      )}
    </section>
  );
};
