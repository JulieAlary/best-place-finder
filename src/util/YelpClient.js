const apiKey = 'PtB7jR4u37EhSVYMluR0aKbkMxTlLrF39pBXp5YZ_QmDwbCpmTHg1-HvQQMdXjWG_nO--Oqn5zDqvsW5A4w2j8u_b6agzMgHZd_1V3j3pbe_bkZk6wF0grxHK0qeW3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(place => ({
                        id: place.id,
                        imageSrc: place.image_url,
                        name: place.name,
                        address: place.location.address1,
                        city: place.location.city,
                        state: place.location.state,
                        zipCode: place.location.zip_code,
                        category: place.categories[0].title,
                        rating: place.rating,
                        reviewCount: place.review_count,
                        displayPhone: place.display_phone
                    }
                ));
            }
        });
    }
};

export default Yelp;
