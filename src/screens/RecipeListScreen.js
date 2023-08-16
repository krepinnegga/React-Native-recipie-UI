import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React, {useState} from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { recipeList } from "../Constant";

const RecipeListScreen = () => {
	const [filteredRecipes, setFilteredRecipes] = useState(recipeList);

	const handleSearchFilter = (searchText) => {
		if (searchText) {
		  const filtered = recipeList.filter((recipe) =>
			recipe.name && recipe.name.toLowerCase().includes(searchText.toLowerCase())
		  );
		  setFilteredRecipes(filtered);
		} else {
		  setFilteredRecipes(recipeList); // Reset to original list if no search text
		}
	  };
	

	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			{/* render header */}
			<Header headerText={"Hi, John "} headerIcon={"bell-o"} />

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"enter your fav recipe"} onFilter={handleSearchFilter} />

			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8, }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22 }}>
			
				<Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8, }}>Recipes</Text>
				{/* Recipes list */}
				{filteredRecipes.length === 0 ? (
					<Text>No recipes found</Text>
						) : (
					<RecipeCard recipes={filteredRecipes} />
				)}
			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
