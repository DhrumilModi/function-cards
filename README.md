# Function Chain Calculator

![Product Image](https://github.com/DhrumilModi/function-cards/blob/main/public/product.png?raw=true)

A React-based calculator application that allows users to create and manage chains of mathematical functions with dynamic equation editing and real-time calculations.

## Project Overview

This project implements a function chain calculator where users can:

- Create and connect multiple function nodes
- Edit equations dynamically
- View real-time calculation results
- Visualize function connections with curved lines

## Features

- **Dynamic Function Chaining**: Connect multiple function nodes to create calculation chains
- **Real-time Equation Editing**: Edit equations with immediate result updates
- **Visual Connections**: See function relationships with curved connecting lines
- **Type-safe Implementation**: Built with TypeScript for robust type checking
- **Context-based State Management**: Efficient state management using React Context
- **Responsive Design**: Modern and clean UI that works across different screen sizes

## Project Structure

```
src/
├── components/
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.types.ts
│   │   └── FunctionCard.tsx
│   ├── CardRadio/
│   │   ├── CardRadio.tsx
│   │   └── CardRadio.types.ts
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.types.ts
│   │   └── InInputGroup.tsx
│   └── Lines/
│       └── CurvedLineBetweenElements.tsx
├── context/
│   ├── CalculatorContext.tsx
│   └── Calculator.Types.ts
├── hooks/
│   └── useCalculator.ts
├── types/
│   ├── calculator.types.ts
│   └── components.types.ts
└── config/
    └── config.ts
```

## Technical Implementation

### Core Components

1. **CalculatorContext**

   - Manages global state for equations and connections
   - Handles line management and equation updates
   - Provides context utilities to child components

2. **Card Components**

   - `Card.tsx`: Base card component with input/output connections
   - `FunctionCard.tsx`: Specialized card for function equations
   - `CardRadio.tsx`: Connection points for function chaining

3. **Input Components**

   - `Input.tsx`: Base input component with validation
   - `InInputGroup.tsx`: Input group with label and formatting

4. **Line Visualization**
   - `CurvedLineBetweenElements.tsx`: Renders curved lines between connected functions

### State Management

- Uses React Context for global state management
- Implements custom hooks for calculator logic
- Maintains type safety with TypeScript interfaces

### Type System

- Comprehensive type definitions for components and state
- Strict type checking for function parameters and returns
- Interface definitions for props and context values

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/DhrumilModi/function-cards.git
cd function-cards
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

## Development Guidelines

1. **Type Safety**

   - Always define proper interfaces for props and state
   - Use TypeScript's type system for function parameters and returns

2. **Component Structure**

   - Keep components focused and single-responsibility
   - Use proper file organization within component directories

3. **State Management**

   - Use context for global state
   - Keep local state when appropriate
   - Implement proper memoization for performance

4. **Code Style**
   - Follow consistent naming conventions
   - Use proper TypeScript features
   - Maintain clean and documented code

## License

This project is licensed under the MIT License - see the LICENSE file for details.
