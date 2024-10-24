import { useState } from "react"
import styles from "./Calculator.module.css"

export default function Calculator() {
    const [expr, setExpr] = useState("");
    const [val, setVal] = useState(null);

    const clickHandler = (event) => {
        // console.log(typeof event.target.textContent)
        setExpr(prev => prev + event.target.textContent);
    }


    const resetHandler = () => {
        setExpr([]);
        setVal("");
    }

    const evaluateHandler = () => {
        try {
            if (expr.length === 0) {
                setVal("Error");
            }
            else if (isNaN(expr[expr.length - 1])) {
                setVal("Error")
            }
            else {
                setVal(eval(expr).toString());
            }
        }
        catch {
            setVal("Error")
        }


    }
    // const arr = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"]

    return (
        <div className={styles.main}>
            <h1>React Calculator</h1>
            <input value={expr} type="text" />
            {val ? <div>{val}</div> : null}
            <div className={styles.calcy}>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>7</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>8</button >
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>9</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>+</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>4</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>5</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>6</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>-</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>1</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>2</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>3</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>*</button>
                <button className={styles.characters} onClick={(event) => resetHandler(event)}>C</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>0</button>
                <button className={styles.characters} onClick={() => evaluateHandler()}>=</button>
                <button className={styles.characters} onClick={(event) => clickHandler(event)}>/</button>
            </div >
        </div >
    )
}