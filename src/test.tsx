function Button2(){
    return (
        <button>
            Button!!

        </button>
    );
}

export const Test = () => {
    const title: string = "test";

    return (
        <div className="Test">
            <h1>{title}</h1>
            <Button2/>
        </div>
    );
}
