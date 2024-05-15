import React from "react";
import useIngredients from "../hooks/useIngredients";

//@ts-expect-error // Ignore this error
import ChickenLegSvg from "../../../assets/ChickenLegSvg";
import Chip from "../../../components/Chip";
import Modal from "../../../components/Modal";
import ModuleBox from "../../../components/ModuleBox";
import SelectAutocomplete from "../../../components/SelectAutocomplete";

const Ingredients: React.FC = () => {
  const {
    optionsIngredients,
    handleAddIngredient,
    error,
    handleRemoveIngredient,
    isOpen,
    setIsOpen,
    ingredients,
  } = useIngredients();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Ingredientes agregados"
      >
        <div className="flex flex-wrap">
          {ingredients.map((ingredient, index) => (
            <Chip
              key={index}
              text={ingredient}
              onRemove={() => handleRemoveIngredient(ingredient)}
            />
          ))}
        </div>
      </Modal>
      <ModuleBox title="Ingredientes">
        <div className="flex flex-col gap-5">
          <SelectAutocomplete
            type="text"
            options={optionsIngredients}
            error={error}
            placeholder="Agrega un ingrediente"
            icon={<ChickenLegSvg />}
            onSelectOption={(e) =>
              handleAddIngredient(e.currentTarget.textContent as string)
            }
          />
          <div className="flex flex-col items-start w-[415px] h-[130px]">
            <h3 className="text-md font-semibold text-gray-600 mb-3">
              Ultimos ingredientes:
            </h3>
            {ingredients.length !== 0 ? (
              <div className=" flex flex-wrap">
                {ingredients.slice(0, 8).map((ingredient, index) => (
                  <Chip
                    key={index}
                    text={ingredient}
                    onRemove={() => handleRemoveIngredient(ingredient)}
                  />
                ))}
                {ingredients.length > 8 && (
                  <Chip text="..." onClick={() => setIsOpen(true)} />
                )}
              </div>
            ) : (
              <div className=" bg-gray-100 rounded h-full w-full flex justify-center items-center">
                <p className="text-gray-400 text-sm italic">
                  No agregaste ingredientes aun
                </p>
              </div>
            )}
          </div>
        </div>
      </ModuleBox>
    </>
  );
};

export default Ingredients;
