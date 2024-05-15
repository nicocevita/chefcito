import { useEffect, useState } from "react";

const useIngredients = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const handleAddIngredient = (ingredient: string) => {
    if (ingredients.includes(ingredient)) {
      setError("Ingrediente ya agregado");
      return;
    }
    setIngredients((ingredients) => {
      return [ingredient, ...ingredients];
    });
    setError("");
  };

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients((ingredients) => {
      return ingredients.filter((item) => item !== ingredient);
    });
  };

  const optionsIngredients = [
    { value: "option1", label: "Tomate" },
    { value: "option2", label: "Lechuga" },
    { value: "option3", label: "Comino" },
    { value: "option4", label: "Pimienta" },
    { value: "option5", label: "Cebolla" },
    { value: "option6", label: "Mayonesa" },
    { value: "option7", label: "Mostaza" },
    { value: "option8", label: "Canela" },
    { value: "option8", label: "Manteca" },
  ];

  useEffect(() => {
    if (ingredients.length === 0) {
      setIsOpen(false);
    }
  }, [ingredients]);

  return {
    ingredients,
    error,
    handleAddIngredient,
    optionsIngredients,
    handleRemoveIngredient,
    isOpen,
    setIsOpen,
  };
};

export default useIngredients;
