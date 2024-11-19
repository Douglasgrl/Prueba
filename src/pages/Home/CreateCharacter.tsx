import { useState } from "react";
import Modal from "../../components/Modal";
import InputGeneral from "../../components/InputGeneral"; // Importa tu componente reutilizable
import { CharactersProps } from "../../utils/interface";

interface CreateCharacterProps {
  onCreate: (newCharacter: CharactersProps) => void;
}

const CreateCharacter = ({ onCreate }: CreateCharacterProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [newCharacter, setNewCharacter] = useState<CharactersProps>({
    name: "",
    status: "",
    species: "",
    gender: "",
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Captura el archivo seleccionado
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewCharacter((prev) => ({
          ...prev,
          image: reader.result as string, // Guarda la URL de la imagen
        }));
      };
      reader.readAsDataURL(file); // Convierte el archivo a DataURL
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !newCharacter.name ||
      !newCharacter.status ||
      !newCharacter.species ||
      !newCharacter.gender
    ) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    onCreate(newCharacter);
    setOpenModal(false);
    setNewCharacter({
      name: "",
      status: "",
      species: "",
      gender: "",
      image: "",
    });
  };

  return (
    <>
      <Modal
        isShown={openModal}
        element={
          <div className="p-4 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">Crear nuevo personaje</h2>
            <form onSubmit={handleSubmit}>
              <InputGeneral
                onChange={handleInputChange}
                value={newCharacter.name}
                name="name"
                type="text"
                label="Nombre"
                className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full mb-4"
              />
              <InputGeneral
                onChange={handleInputChange}
                value={newCharacter.status}
                name="status"
                type="text"
                label="Estado (Ej: Vivo, Muerto)"
                className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full mb-4"
              />
              <InputGeneral
                onChange={handleInputChange}
                value={newCharacter.species}
                name="species"
                type="text"
                label="Especie"
                className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full mb-4"
              />
              <InputGeneral
                onChange={handleInputChange}
                value={newCharacter.gender}
                name="gender"
                type="text"
                label="Género"
                className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full mb-4"
              />
              <InputGeneral
                onChange={handleFileChange}
                name="image"
                type="file"
                label=""
                className="text-[16px] text-[#111827CC] font-light lg:h-[50px] w-full mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded w-full"
              >
                Crear
              </button>
            </form>
            <p
              onClick={() => setOpenModal(false)}
              className="text-red-500 mt-2 cursor-pointer text-center"
            >
              Cancelar
            </p>
          </div>
        }
      ></Modal>
      <div>
        <p
          onClick={() => setOpenModal(true)}
          className="w-[200px] cursor-pointer text-rick-skyBlue text-[16px] font-bold"
        >
          Crear personaje
        </p>
      </div>
    </>
  );
};

export default CreateCharacter;
