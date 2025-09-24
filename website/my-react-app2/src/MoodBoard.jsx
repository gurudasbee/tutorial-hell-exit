export const MoodBoardItem = ({ color, image, description }) => {
    return (
        <div class="mood-board-item" style={{ backgroundColor: color}}>
            <img className="mood-board-image" src={ image } alt= { description } />
            <h3 className="mood-board-text">{ description }</h3>
        </div>
    )
}

export const MoodBoard = () => {
    // const MoodBoardItems = [
    //     {
    //         color: "#fff0f5",
    //         image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
    //         description: "Secret Pathway"
    //     },
    //     {
    //         color: "#f5f5dc",
    //         image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
    //         description: "Peaceful Shore"
    //     },
    //     {
    //         color: "#f0fff0",
    //         image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
    //         description: "Green Meadows"
    //     },
    //     {
    //         color: "#f8f8ff",
    //         image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
    //         description: "Ocean Voyage"
    //     },
    //     {
    //         color: "#fffacd",
    //         image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
    //         description: "Santorini Dreams"
    //     },
    //     {
    //         color: "#fffdac",
    //         image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
    //         description: "City Wanderer"
    //     }
    // ];
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            {/* <div className="mood-board">
                {
                    MoodBoardItems.map((item) => (
                        <MoodBoardItem 
                            // key = { index }
                            color= { item.color }
                            image= { item.image }
                            description={ item. description }
                        />
                    ))
                }
            </div> */}

            <div className="mood-board">
                <MoodBoardItem color="black" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="Stairway To Heaven" />
                <MoodBoardItem color="orange" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="Sea Shore" />
                <MoodBoardItem color="light blue" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="Grass Filed" />
                <MoodBoardItem color="orange" image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg" description="Suez Canal" />
                <MoodBoardItem color="yellow
                " image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" description="happy" />
                <MoodBoardItem color="beige" image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg" description="Santorini" />
            </div>
        </div>
    )
}