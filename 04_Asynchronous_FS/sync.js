const fun2 = () => {
    console.log("fun2 is starting");
    console.log("This is a synchronous behaviour");
}

const fun1 = () => {
    console.log("fun1 is starting");
    fun2();
    console.log("fun1 is ending");
}

fun1();

// <!-- Output will be

// fun1 is starting
// fun2 is starting
// fun1 is ending

// behaves in a synchronous manner , i.e , one after another -->