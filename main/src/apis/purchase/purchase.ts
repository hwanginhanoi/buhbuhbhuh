// import axios from 'axios';
import responseData from '../../interfaces/responseData.ts';
async function purchase({}){
    let url = "http://localhost:3001/purchase";
    try{
        const response = await fetch(url,{
            method: 'POST',
            body: formData

        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseFromServer: responseData = await response.json();
        if (!responseFromServer.success){
            throw new Error("Can't retrieve data");
        }
        return responseFromServer.data;

    }catch(error){
    }
}

export default purchase;
