"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Table = styled.table`
  width: 100%;
  background: #3498db;
  color: white;
  border-radius: 8px;
  text-align:center;
`;
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://dummyjson.com/recipes");
                if (!response.ok) {
                    throw new Error("No data");
                }
                const data = await response.json();
                setRecipes(data.recipes.slice(0, 10));
            } catch (error) {
                console.log(error);
            }
        };
        fetchRecipes();
    }, []);
    return (
        <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Prep Time (Minutes)</th>
                        <th>Servings</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr key={recipe.id}>
                            <td>{recipe.id}</td>
                            <td>{recipe.name}</td>
                            <td>{recipe.prepTimeMinutes}</td>
                            <td>{recipe.servings}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Recipes;
