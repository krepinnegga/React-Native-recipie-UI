import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { categories, colors } from "../Constant";
import RecipeCard from "./RecipeCard";


const CategoriesFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const handleCategorySelection = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => handleCategorySelection(category.id)}
            style={{
              backgroundColor:
                selectedCategory === category.id
                  ? colors.COLOR_PRIMARY
                  : colors.COLOR_LIGHT,
              marginRight: 36,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              marginVertical: 16,
            }}
          >
            <Text
              style={{
                color:
                  selectedCategory === category.id && colors.COLOR_DARK,
                fontSize: 18,
              }}
            >
              {category.category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <RecipeCard selectedCategory={selectedCategory} />
    </View>
  );
};

export default CategoriesFilter;
