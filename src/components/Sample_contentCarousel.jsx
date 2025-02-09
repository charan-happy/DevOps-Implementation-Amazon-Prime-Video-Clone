import ReactDOM from "react-dom/client";
import ContentTile from "./ContentTile";
import ContentTileData from "./ContentTileData";

function abc(data) {
  return <ContentTile poster={data.poster} />;
}

function ContentCarousel() {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginLeft: 72, marginRight: 72, paddingBottom: 16 }}>
        Movies List
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {ContentTileData.map((data) => (
          <abc key={data.id} data={data} />
        ))}
      </div>
      <div
        style={{
          justifyItems: "center",
          margin: 0,
          maxWidth: "30px",
          padding: 0,
          backgroundColor: "transparent",
          zIndex: 20,
          position: "relative",
          // border: "none",
          // appearance: "none",
          // display: "none",
        }}
      >
        right
        {/* <img
          src="https://www.citypng.com/public/uploads/preview/right-arrowhead-black-11581593809dmlihnv7fa.png" */}
      </div>
    </div>
  );
}

export default ContentCarousel;