What is a TypeScript?

TS - A JavaScript Superset
A language building up on JavaScript

Adds new Features + Advantages to JavaScript

Browser CAN'T execute it!

TS -> Compiled to JS

Features are compiled to JS "workarounds", possible errors are thrown

Why TypeScript?

Javascript
-----------
function add(num1, num2) {

    return num1 + num2;
}

console.log(add('2', '3')) -> unwanted behaviour at runtime -> Mitigation strategies: Add if check to add function, Validate & Sanitize user input -> Developers can still write invalid code! -> TypeScript is a "Tool" that helps developers write better code.

            TypeScript Overview
            -------------------

            TypeScript adds...

            Types!                                                          
            Next-gen JavaScript Features (compiled  down for older browsers)
            Non-JavaScript Features like Interfaces or Generics
            Meta-Programming Features like Decorators
            Rich Configuration Options
            Modern Tooling that helps even in non TypeScript Projects

            Course Outline
            -------------
            Getting Started -> TypeScript Basics->Compiler & Configuration Deep Dive->Working with Next-gen JS Code->Classes and Interfaces->Advanced Types and TypeScript Features->Generics->Decorators-> Time to Practice - Full Project->Working with Namespaces and Modules->Webpack & TypeScript->Third-Party Libraries and TypeScript->React + TypeScript & NodeJS + TypeScript

            Core Types
            ----------
            number : 1, 5.3, -10 -> All numbers, no differentiation between integers of floats
            string : 'Hi', "Hi", `Hi` -> All text values
            boolean : true, false -> Just these two, no "truthy" or "falsy" values
            object : {age: 30} -> Any JavaScript object, more specific types (type of object) are possible
            Array : [1, 2, 3] -> Any JavaScript array is supported, type can be flexible or strict (regarding the element types)
            Tuple : [1, 2] Added by TypeScript: Fixed-length array
            Enum : enum { NEW, OLD } -> Added by TypeScript: Automatically enumerated global constant identifiers
            Any : * -> Any kinf of value, no specific type assignment

            Compiler:

            tsc --init
            tsc
            tsc --watch or tsc -w

            tsconfig.json: include and exclude files
            compiler options: root dir and out dir
