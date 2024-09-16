import Breadcrumb from "react-bootstrap/Breadcrumb";

function MigasPan({ migas }) {
  return (
    <Breadcrumb>
      {migas.map((miga, index) => (
        <Breadcrumb.Item key={index} href={miga.href} active={miga.active}>
          {miga.text}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default MigasPan;
