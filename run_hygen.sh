#!/bin/bash

# Define arrays for different atomic design elements
#ATOMS=("Button" "Input" "Label")
#MOLECULES=("FormGroup" "Card" "Navbar")
#ORGANISMS=("Header" "Footer" "Sidebar")
#TEMPLATES=("MainLayout" "AuthLayout")
PAGES=("HomePage" "AboutPage" "ContactPage")

# Function to generate components using Hygen
generate_component() {
  local type=$1
  local name=$2
  npx hygen $type new --name $name
}

# Generate atom components
for atom in "${ATOMS[@]}"; do
  generate_component "atom" $atom
done

# Generate molecule components
for molecule in "${MOLECULES[@]}"; do
  generate_component "molecule" $molecule
done

# Generate organism components
for organism in "${ORGANISMS[@]}"; do
  generate_component "organism" $organism
done

# Generate template components
for template in "${TEMPLATES[@]}"; do
  generate_component "template" $template
done

# Generate page components
for page in "${PAGES[@]}"; do
  generate_component "page" $page
done

echo "All atomic elements have been generated successfully!"
