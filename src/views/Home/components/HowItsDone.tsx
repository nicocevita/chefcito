import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ModuleBox from "../../../components/ModuleBox";

//@ts-expect-error // Ignore this error
import LupaSvg from "../../../assets/LupaSvg";
//@ts-expect-error // Ignore this error
import LoadingSvg from "../../../assets/LoadingSvg";

const HowItsDone: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ModuleBox title="¿Como se hace...?">
      <div className="flex flex-col">
        <p className="text-gray-500 bg-gray-100 rounded-md p-4 italic text-start text-xs mb-8 max-w-sm">
          Acá vas a poder buscar la receta de alguna comida. Tene en cuenta que
          no esta basado en los ingredientes que vos elegiste, sino que es una
          busqueda general.
        </p>
        <Input
          type="text"
          value={search}
          maxLength={30}
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Ej: Pastel de papa... "
          icon={<LupaSvg />}
        />
        <Button
          onClick={() => {
            setLoading(true);
          }}
          className={loading ? "bg-blue-700" : ""}
          disabled={loading}
          icon={loading && <LoadingSvg />}
          text={`${loading ? "Buscando" : "Buscar"}`}
        />
      </div>
    </ModuleBox>
  );
};

export default HowItsDone;
