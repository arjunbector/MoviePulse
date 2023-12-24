const imbdRatingConverter = (rating) => {
    rating = rating.toString();
    let shortRating = "k";
    if (rating.length > 3) {
        shortRating = rating.slice(0,-4) + shortRating;
        return (shortRating);
    }

    return rating;
}

export default imbdRatingConverter;
