import React, { useState } from 'react'
import allComics from "./Files/allComics"

function GeneratorPage() {
    function chooseComic() {
        var comic = allComics[Math.floor(Math.random() * allComics.length)];
        return comic
    }
    return(
        <div>
            <button onclick="chooseComics()" >Generate!</button>
        </div>
    )
}