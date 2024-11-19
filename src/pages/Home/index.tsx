import { useEffect, useState } from "react";
import { CharactersProps } from "../../utils/interface";
import { getCharacters } from "../../redux/services/characters";
import SearchInput from "../../components/SearchInput";
import CardsCharacters from "../../components/CardCharacters";
import CreateCharacter from "./CreateCharacter";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/reducers/auth";
import { IconLogout } from "../../utils/svg";

const Home = () => {
  const [charactersAll, setCharactersAll] = useState<CharactersProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();

  const getCharactersList = async () => {
    const characters = await getCharacters();
    setCharactersAll(characters);
  };

  useEffect(() => {
    getCharactersList();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filtrar personajes que coincidan con la búsqueda
  const filteredCharacters = charactersAll.filter((charact) =>
    charact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(charactersAll);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleCreateCharacter = (newCharacter: CharactersProps) => {
    setCharactersAll((prev) => [...prev, { ...newCharacter, id: prev.length + 1 }]); // Agregar nuevo personaje con ID único
  };

  return (
    <div className="container-pad-width px-10 pb-10">
      <div className="mt-10 flex flex-col lg:flex-row lg:justify-between lg:gap-10 items-center">
        <SearchInput
          inputPlaceHolder={"Buscar personaje"}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="flex flex-col gap-3 justify-center items-center text-center lg:flex-row mt-5 lg:mt-0">
          <CreateCharacter onCreate={handleCreateCharacter} />

          <div className="flex flex-row items-center justify-center gap-3 border-[1px] border-rick-red px-4 rounded-md h-[40px] cursor-pointer">
            <IconLogout />
            <p className="text-rick-red" onClick={handleLogout}>
              Logout
            </p>
          </div>
        </div>
      </div>

      {filteredCharacters.length > 0 ? (
        <div className="flex flex-col gap-10 mt-20 items-center justify-center lg:justify-between md:grid-cols-2 lg:grid-cols-3 md:grid lg:flex-wrap lg:gap-28 lg:mb-16 px-10">
          {filteredCharacters.map((charact) => (
            <CardsCharacters key={charact.id} info={charact} />
          ))}
        </div>
      ) : (
        <p>No se encontraron personajes.</p>
      )}
    </div>
  );
};

export default Home;
