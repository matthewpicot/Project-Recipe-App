import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialState);
  };

  const inputZone = [
    { name: "name", label: "Name", type: "text" },
    { name: "cuisine", label: "Cuisine", type: "text" },
    { name: "photo", label: "Photo", type: "text" },
  ];

  const textareaZone = [
    { name: "ingredients", label: "Ingredients" },
    { name: "preparation", label: "Preparation" },
  ];

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
          {inputZone.map((input) => (
              <td key={input.name}>
                <input
                  type={input.type || "text"}
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleChange}
                  placeholder={input.label}
                />
              </td>
          ))}
          {textareaZone.map((textarea) => (
              <td key={textarea.name}>
                <textarea
                  name={textarea.name}
                  value={formData[textarea.name]}
                  onChange={handleChange}
                  placeholder={textarea.label}
                ></textarea>
              </td>
          ))}
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;


