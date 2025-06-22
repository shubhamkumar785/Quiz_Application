const quizData = {
python : {
    "easy": [
        {
            "question": "What is Python?",
            "options": ["Programming language", "Snake", "Coffee", "Car"],
            "answer": "Programming language"
        },
        {
            "question": "Which keyword is used to define a function in Python?",
            "options": ["func", "function", "def", "define"],
            "answer": "def"
        },
        {
            "question": "What is the output of: print(2 ** 3)?",
            "options": ["6", "8", "9", "5"],
            "answer": "8"
        },
        {
            "question": "Which symbol is used to comment a single line in Python?",
            "options": ["//", "#", "/*", "<!--"],
            "answer": "#"
        },
        {
            "question": "How do you create a variable with the value 5?",
            "options": ["x = 5", "int x = 5", "var x = 5", "x := 5"],
            "answer": "x = 5"
        },
        {
            "question": "What data type is the result of: 3 / 2?",
            "options": ["int", "float", "str", "bool"],
            "answer": "float"
        },
        {
            "question": "Which method adds an item to the end of a list?",
            "options": ["add()", "append()", "insert()", "extend()"],
            "answer": "append()"
        },
        {
            "question": "What is the correct way to import a module named 'math'?",
            "options": ["import math", "include math", "using math", "require math"],
            "answer": "import math"
        },
        {
            "question": "How do you start a for loop that goes from 0 to 4?",
            "options": [
                "for i in range(5):",
                "for i in range(0,5):",
                "for i in range(1,5):",
                "Both 1 and 2"
            ],
            "answer": "Both 1 and 2"
        },
        {
            "question": "Which function prints output to the screen?",
            "options": ["echo()", "printf()", "print()", "output()"],
            "answer": "print()"
        },
        {
            "question": "What is the output of: print(type('Hello'))?",
            "options": ["<class 'str'>", "<class 'int'>", "<class 'list'>", "<class 'bool'>"],
            "answer": "<class 'str'>"
        },
        {
            "question": "Which operator is used for equality comparison?",
            "options": ["=", "==", "===", "!="],
            "answer": "=="
        },
        {
            "question": "How do you start a while loop in Python?",
            "options": ["while x > 0:", "while (x > 0)", "while x > 0 {}", "while x > 0 then"],
            "answer": "while x > 0:"
        },
        {
            "question": "Which data structure is ordered and changeable in Python?",
            "options": ["Tuple", "List", "Set", "Dictionary"],
            "answer": "List"
        },
        {
            "question": "How do you get the length of a list named 'items'?",
            "options": ["length(items)", "len(items)", "count(items)", "size(items)"],
            "answer": "len(items)"
        },
        {
            "question": "What will print('Hello' + 'World') output?",
            "options": ["Hello World", "HelloWorld", "Hello+World", "Error"],
            "answer": "HelloWorld"
        },
        {
            "question": "How do you start a block of code inside an if statement?",
            "options": ["Indentation", "Brackets {}", "Parentheses ()", "Quotes ''"],
            "answer": "Indentation"
        },
        {
            "question": "Which keyword is used to create a class in Python?",
            "options": ["class", "def", "struct", "object"],
            "answer": "class"
        }
    ],
    medium: [
        {
            "question": "Which of the following is a Python tuple?",
            "options": ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
            "answer": "(1, 2, 3)"
        },
        {
            "question": "What does the 'len()' function do?",
            "options": ["Calculates area", "Returns length", "Deletes list", "Adds elements"],
            "answer": "Returns length"
        },
        {
            "question": "Which module is used for regular expressions in Python?",
            "options": ["regex", "re", "pyregex", "string"],
            "answer": "re"
        },
        {
            "question": "What will be the output of: print(list(range(2, 10, 2)))?",
            "options": [
                "[2, 3, 4, 5, 6, 7, 8, 9]",
                "[2, 4, 6, 8]",
                "[2, 6, 10]",
                "[0, 2, 4, 6, 8]"
            ],
            "answer": "[2, 4, 6, 8]"
        },
        {
            "question": "How can you handle exceptions in Python?",
            "options": ["try-except block", "if-else block", "for loop", "while loop"],
            "answer": "try-except block"
        },
        {
            "question": "What is the difference between 'is' and '==' operators?",
            "options": [
                "'is' checks value equality; '==' checks identity",
                "'is' checks identity; '==' checks value equality",
                "Both check value equality",
                "Both check identity"
            ],
            "answer": "'is' checks identity; '==' checks value equality"
        },
        {
            "question": "Which of these is a valid dictionary key in Python?",
            "options": ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "['a', 'b', 'c']"],
            "answer": "(1, 2, 3)"
        },
        {
            "question": "What will the expression 'bool([])' return?",
            "options": ["True", "False", "None", "Error"],
            "answer": "False"
        },
        {
            "question": "Which function converts a string '123' to an integer?",
            "options": ["int('123')", "str('123')", "float('123')", "chr('123')"],
            "answer": "int('123')"
        },
        {
            "question": "What is list comprehension used for?",
            "options": [
                "Creating lists based on existing lists",
                "Creating tuples",
                "Filtering dictionary keys",
                "Sorting lists"
            ],
            "answer": "Creating lists based on existing lists"
        },
        {
            "question": "Which of the following is NOT a valid way to import only the sqrt function from the math module?",
            "options": [
                "from math import sqrt",
                "import sqrt from math",
                "from math import sqrt as square_root",
                "import math; math.sqrt(4)"
            ],
            "answer": "import sqrt from math"
        },
        {
            "question": "What does the 'pass' statement do in Python?",
            "options": [
                "Stops the program",
                "Does nothing, acts as a placeholder",
                "Returns a value",
                "Raises an error"
            ],
            "answer": "Does nothing, acts as a placeholder"
        },
        {
            "question": "Which method removes and returns the last item of a list?",
            "options": ["pop()", "remove()", "delete()", "discard()"],
            "answer": "pop()"
        },
        {
            "question": "How do you create an anonymous function in Python?",
            "options": [
                "def lambda():",
                "lambda function()",
                "lambda arguments: expression",
                "def anonymous():"
            ],
            "answer": "lambda arguments: expression"
        },
        {
            "question": "What is the output of: print({1, 2, 3} & {2, 3, 4})?",
            "options": ["{1, 2, 3, 4}", "{2, 3}", "{1, 4}", "{}"],
            "answer": "{2, 3}"
        }
    ],
    hard: [
       {
            "question": "What is the time complexity of searching in a Python set?",
            "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
            "answer": "O(1)"
        },
        {
            "question": "Which keyword is used for exception handling?",
            "options": ["except", "try", "catch", "both try and except"],
            "answer": "both try and except"
        },
        {
            "question": "Which of the following creates a generator in Python?",
            "options": ["[]", "()", "{}", "yield"],
            "answer": "yield"
        },
        {
            "question": "What will the following code output?\n\n```python\nx = [i**2 for i in range(5)]\nprint(x)\n```",
            "options": [
                "[1, 4, 9, 16, 25]",
                "[0, 1, 4, 9, 16]",
                "[0, 1, 2, 3, 4]",
                "[1, 2, 3, 4, 5]"
            ],
            "answer": "[0, 1, 4, 9, 16]"
        },
        {
            "question": "Which of these is NOT a valid way to open a file for both reading and writing?",
            "options": ["r+", "w+", "a+", "x+"],
            "answer": "x+"
        },
        {
            "question": "What is the difference between deep copy and shallow copy?",
            "options": [
                "Shallow copy copies references, deep copy copies objects recursively",
                "Deep copy copies references, shallow copy copies objects recursively",
                "Both are same",
                "Shallow copy copies everything, deep copy copies nothing"
            ],
            "answer": "Shallow copy copies references, deep copy copies objects recursively"
        },
        {
            "question": "How do you enforce type hinting for function arguments in Python?",
            "options": [
                "def func(x: int, y: str) -> None:",
                "def func(int x, str y):",
                "func(int x, str y):",
                "def func(x, y) : int, str"
            ],
            "answer": "def func(x: int, y: str) -> None:"
        },
        {
            "question": "Which Python library is commonly used for numerical computations and matrix operations?",
            "options": ["pandas", "numpy", "matplotlib", "scikit-learn"],
            "answer": "numpy"
        },
        {
            "question": "What is a Python decorator?",
            "options": [
                "A function that modifies the behavior of another function",
                "A syntax for class inheritance",
                "A type of list comprehension",
                "A tool for exception handling"
            ],
            "answer": "A function that modifies the behavior of another function"
        },
        {
            "question": "What will be the output of the following code?\n\n```python\ndef foo(x, lst=[]):\n    lst.append(x)\n    return lst\n\nprint(foo(1))\nprint(foo(2))\n```",
            "options": [
                "[1]\n[2]",
                "[1]\n[1, 2]",
                "[1, 2]\n[1, 2]",
                "[1]\n[]"
            ],
            "answer": "[1]\n[1, 2]"
        },
        {
            "question": "Which of the following statements about Python’s GIL (Global Interpreter Lock) is true?",
            "options": [
                "It allows multiple threads to execute Python bytecodes simultaneously",
                "It prevents multiple native threads from executing Python bytecodes at once",
                "It is used to manage memory allocation",
                "It enables multiprocessing in Python"
            ],
            "answer": "It prevents multiple native threads from executing Python bytecodes at once"
        },
        {
            "question": "What does the 'with' statement do in Python?",
            "options": [
                "Simplifies exception handling",
                "Ensures resources are properly cleaned up after use",
                "Creates a loop",
                "Defines a function"
            ],
            "answer": "Ensures resources are properly cleaned up after use"
        },
        {
            "question": "What is the output of this code snippet?\n\n```python\nprint({i: i*i for i in range(3)})\n```",
            "options": [
                "{0: 0, 1: 1, 2: 4}",
                "{0: 1, 1: 1, 2: 4}",
                "[0, 1, 4]",
                "[0: 0, 1: 1, 2: 4]"
            ],
            "answer": "{0: 0, 1: 1, 2: 4}"
        },
        {
            "question": "What does the 'isinstance()' function do?",
            "options": [
                "Checks if an object is an instance of a specified class or tuple of classes",
                "Creates a new instance of a class",
                "Checks if a class inherits from another class",
                "Returns the type of an object"
            ],
            "answer": "Checks if an object is an instance of a specified class or tuple of classes"
        },
        {
            "question": "What will happen if you try to access a dictionary key that does not exist?",
            "options": [
                "Returns None",
                "Raises a KeyError",
                "Returns 0",
                "Creates a new key with None value"
            ],
            "answer": "Raises a KeyError"
        }
    ]
},





//  java Questions -----------------

java: {
    easy: [
       {
            "question": "Java was developed by?",
            "options": ["Microsoft", "Sun Microsystems", "Google", "Apple"],
            "answer": "Sun Microsystems"
        },
        {
            "question": "Which keyword is used to define a class in Java?",
            "options": ["class", "Class", "define", "structure"],
            "answer": "class"
        },
        {
            "question": "What is the extension of Java bytecode files?",
            "options": [".java", ".class", ".jar", ".exe"],
            "answer": ".class"
        },
        {
            "question": "Which method is the entry point of a Java program?",
            "options": ["main()", "start()", "run()", "init()"],
            "answer": "main()"
        },
        {
            "question": "Which of these is a valid comment in Java?",
            "options": ["// This is a comment", "# This is a comment", "<!-- comment -->", "/* comment */"],
            "answer": "// This is a comment"
        },
        {
            "question": "Which keyword is used to inherit a class in Java?",
            "options": ["inherits", "extends", "implements", "derives"],
            "answer": "extends"
        },
        {
            "question": "What is the default value of an int variable in Java?",
            "options": ["0", "null", "undefined", "1"],
            "answer": "0"
        },
        {
            "question": "Which data type is used to create a variable that should store text?",
            "options": ["String", "int", "char", "float"],
            "answer": "String"
        },
        {
            "question": "How do you create a single-line comment in Java?",
            "options": ["// comment", "/* comment */", "# comment", "-- comment"],
            "answer": "// comment"
        },
        {
            "question": "Which operator is used to add two numbers in Java?",
            "options": ["+", "-", "*", "/"],
            "answer": "+"
        },
        {
            "question": "Which keyword is used to create a new object in Java?",
            "options": ["new", "create", "make", "object"],
            "answer": "new"
        },
        {
            "question": "Which package contains the Scanner class?",
            "options": ["java.util", "java.io", "java.lang", "java.net"],
            "answer": "java.util"
        },
        {
            "question": "What will be the output of: System.out.println(10 + 20);",
            "options": ["30", "1020", "10 + 20", "Error"],
            "answer": "30"
        },
        {
            "question": "What is the size of a char data type in Java?",
            "options": ["16 bits", "8 bits", "32 bits", "64 bits"],
            "answer": "16 bits"
        },
        {
            "question": "Which of the following is not a Java keyword?",
            "options": ["void", "public", "private", "include"],
            "answer": "include"
        }
    ],
    medium: [
    {
      "question": "Which of the following is a wrapper class in Java?",
      "options": ["int", "Integer", "float", "char"],
      "answer": "Integer"
    },
    {
      "question": "Which interface needs to be implemented to create a thread?",
      "options": ["Runnable", "Threadable", "Executable", "Startable"],
      "answer": "Runnable"
    },
    {
      "question": "What is method overloading?",
      "options": [
        "Two methods with same name but different parameters",
        "Two methods with same name and parameters",
        "Method calling itself",
        "None of these"
      ],
      "answer": "Two methods with same name but different parameters"
    },
    {
      "question": "Which of these keywords is used to inherit a class in Java?",
      "options": ["extends", "implements", "inherits", "super"],
      "answer": "extends"
    },
    {
      "question": "What is the output of the following code?\n\n```java\nSystem.out.println(5 & 3);\n```",
      "options": ["1", "7", "8", "0"],
      "answer": "1"
    },
    {
      "question": "Which of the following exceptions is checked at compile time?",
      "options": ["IOException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
      "answer": "IOException"
    },
    {
      "question": "What will happen if a method throws an exception but it is not handled?",
      "options": [
        "The program terminates abruptly",
        "The exception is ignored",
        "The method returns null",
        "The method continues execution"
      ],
      "answer": "The program terminates abruptly"
    },
    {
      "question": "What does the 'final' keyword mean when applied to a class?",
      "options": [
        "The class cannot be subclassed",
        "The class cannot be instantiated",
        "The class methods cannot be overridden",
        "The class is abstract"
      ],
      "answer": "The class cannot be subclassed"
    },
    {
      "question": "In the two-pointer technique, what is a common use case?",
      "options": [
        "Finding pairs in sorted arrays that add up to a target",
        "Sorting an array",
        "Counting elements in an array",
        "Generating permutations"
      ],
      "answer": "Finding pairs in sorted arrays that add up to a target"
    },
    {
      "question": "What is the difference between '==' and 'equals()' when comparing objects?",
      "options": [
        "'==' checks reference equality, 'equals()' checks value equality",
        "'==' checks value equality, 'equals()' checks reference equality",
        "Both do the same",
        "None of the above"
      ],
      "answer": "'==' checks reference equality, 'equals()' checks value equality"
    },
    {
      "question": "Which of these is a valid way to handle multiple exceptions in Java?",
      "options": [
        "catch (IOException | SQLException e)",
        "catch (IOException, SQLException e)",
        "catch IOException, SQLException e",
        "catch (IOException e or SQLException e)"
      ],
      "answer": "catch (IOException | SQLException e)"
    },
    {
      "question": "What will be the output of:\n\n```java\nSystem.out.println(~2);\n```",
      "options": ["-3", "3", "-2", "2"],
      "answer": "-3"
    },
    {
      "question": "Which of the following is true about abstract classes?",
      "options": [
        "They can have both abstract and concrete methods",
        "They cannot have any method implementation",
        "They cannot have constructors",
        "You can instantiate an abstract class"
      ],
      "answer": "They can have both abstract and concrete methods"
    },
    {
      "question": "Which collection class maintains insertion order?",
      "options": [
        "HashSet", "TreeSet", "LinkedHashSet", "PriorityQueue"
      ],
      "answer": "LinkedHashSet"
    },
    {
      "question": "What is the default value of a boolean instance variable in Java?",
      "options": ["true", "false", "null", "0"],
      "answer": "false"
    }
    ],
    hard: [
       {
      "question": "Which keyword is used to prevent inheritance?",
      "options": ["private", "final", "static", "const"],
      "answer": "final"
    },
    {
      "question": "Java is:",
      "options": ["Interpreted", "Compiled", "Both", "None"],
      "answer": "Both"
    },
    {
      "question": "What is the size of `int` in Java?",
      "options": ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
      "answer": "4 bytes"
    },
    {
      "question": "Which of the following is true about the Java Memory Model?",
      "options": [
        "Heap memory is shared among all threads",
        "Each thread has its own stack memory",
        "Both of the above",
        "None of the above"
      ],
      "answer": "Both of the above"
    },
    {
      "question": "What does the 'volatile' keyword guarantee in Java?",
      "options": [
        "Atomicity of the variable",
        "Visibility of changes to variables across threads",
        "Synchronization",
        "Thread safety"
      ],
      "answer": "Visibility of changes to variables across threads"
    },
    {
      "question": "Which method of the Thread class is used to start a new thread?",
      "options": ["run()", "start()", "execute()", "begin()"],
      "answer": "start()"
    },
    {
      "question": "What is the output of the following code snippet?\n\n```java\nSystem.out.println(10 + 20 + \"30\");\n```",
      "options": ["3030", "102030", "3030", "3030"],
      "answer": "3030"
    },
    {
      "question": "Which design pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation?",
      "options": ["Iterator", "Singleton", "Factory", "Observer"],
      "answer": "Iterator"
    },
    {
      "question": "What happens if an exception is thrown in a static initializer block?",
      "options": [
        "ClassNotFoundException is thrown",
        "ExceptionInInitializerError is thrown",
        "Compile-time error",
        "RuntimeException is thrown"
      ],
      "answer": "ExceptionInInitializerError is thrown"
    },
    {
      "question": "Which collection class is synchronized by default?",
      "options": ["ArrayList", "Vector", "LinkedList", "HashMap"],
      "answer": "Vector"
    },
    {
      "question": "In Java, what does the term 'autoboxing' mean?",
      "options": [
        "Converting primitive types to their wrapper classes automatically",
        "Converting wrapper classes to primitive types automatically",
        "Converting objects to strings",
        "Manually casting types"
      ],
      "answer": "Converting primitive types to their wrapper classes automatically"
    },
    {
      "question": "What is the use of the 'transient' keyword?",
      "options": [
        "Prevents serialization of a field",
        "Prevents inheritance of a method",
        "Defines constant variables",
        "Marks a variable as static"
      ],
      "answer": "Prevents serialization of a field"
    },
    {
      "question": "Which method is invoked when an object is garbage collected?",
      "options": ["finalize()", "dispose()", "destroy()", "cleanup()"],
      "answer": "finalize()"
    },
    {
      "question": "What is the output of this code?\n\n```java\nint x = 5;\nSystem.out.println(x++ + ++x);\n```",
      "options": ["11", "12", "10", "9"],
      "answer": "12"
    },
    {
      "question": "Which of the following is NOT a valid way to create a thread in Java?",
      "options": [
        "Extending Thread class",
        "Implementing Runnable interface",
        "Implementing Callable interface",
        "Implementing Serializable interface"
      ],
      "answer": "Implementing Serializable interface"
    }
    ]
  },



//    java script -------------------------------------
  javascript: {
    easy: [
      {
        question: "JavaScript is primarily used for?",
        options: ["Styling", "Backend", "Frontend", "Database"],
        answer: "Frontend"
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<js>", "<javascript>", "<code>"],
        answer: "<script>"
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "<!--", "**"],
        answer: "//"
      }
    ],
    medium: [
      {
        question: "Which method is used to parse JSON in JavaScript?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.read()", "JSON.load()"],
        answer: "JSON.parse()"
      },
      {
        question: "What does 'this' refer to in JavaScript?",
        options: ["Current function", "Global object", "Current object", "None"],
        answer: "Current object"
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "Function inside a loop",
          "Function with no return",
          "Function with access to parent scope",
          "Object with methods"
        ],
        answer: "Function with access to parent scope"
      }
    ],
    hard: [
      {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const"
      },
      {
        question: "What is 'NaN' in JavaScript?",
        options: ["Not a Number", "Negative and Null", "No assigned Name", "Null and Notfound"],
        answer: "Not a Number"
      },
      {
        question: "What does '===’ mean in JavaScript?",
        options: ["Equal value", "Equal type", "Equal value and type", "Assignment"],
        answer: "Equal value and type"
      }
    ]
  }
};
