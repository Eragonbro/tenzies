# Layout of state <> UI elements

## SET UI ELEMENTS STATE OBJECT
>   **Principle**
        >> This object stores data about the UI elements
        >> To track and update state object based on user interactions
>   **Principle 2**
        >> In react, state should store data not UI elements
    
>   **Code**
        >> 
        ```js 
        Array.from({length: 10}, (value, i))=>({property: quantity})
        ```

## UPDATE SPECIFIC STATE PROPERTIES
>   **Principle**:
        >> Only update state of properties of items that meet certain conditions

>   **Example**
        >> **Conditional update**: update state of "value: ```Math.floor``` of objects whose isFrozen is false
        

## EVENT DRIVEN STATE UPDATES
>   **Principle** 
        >> **Toggle a property** "isActive", "isChecked" in response to user action

>    **Example**
        >> 
        ```js 
        onClick = {()=>handleFreeze(item.id)}
        ```
        >> update state of isFrozen of objects by 
                        ```{...item, isFrozen: !item.isFrozen}```

## CREATE THE UI ELEMENTS
>   **Principle** 
        >> map over array of object state and return the buttons


