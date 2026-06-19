export default function Fireflies() {
  return (
    <>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#FFD700",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0px 0px 20px yellow"
          }}
        />
      ))}
    </>
  );
}