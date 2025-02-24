export async function generateStaticParams() {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data.recipes.map((recipe: { id: string }) => ({
        id: recipe.id.toString(),
    }));
}


export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!res.ok) return <div>Recipe not found</div>;

    const recipe = await res.json();

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.cuisine}</p>
        </div>
    );
}

