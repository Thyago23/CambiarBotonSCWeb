import { useNavigate } from "react-router-dom";

function EditForm({ onUpdate, item }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    onUpdate(item);
  };

  const handleUpdateAndReturn = () => {
    onUpdate(item);
    navigate("/listado");
  };

  const buttonStylePrimary = {
    backgroundColor: '#3498db', 
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 2px #2980b9', 
  };

  const buttonStyleSecondary = {
    backgroundColor: '#2ecc71', 
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '8px', 
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 2px #27ae60', 
  };

  const containerStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={containerStyle}>
      <p>... Contenido del formulario ...</p>
      <button 
        onClick={handleUpdate} 
        style={buttonStylePrimary}
      >
        Guardar y Seguir Editando
      </button>
      <button 
        onClick={handleUpdateAndReturn} 
        style={buttonStyleSecondary}
      >
        Guardar y Volver al Listado
      </button>
    </div>
  );
}

export default EditForm;