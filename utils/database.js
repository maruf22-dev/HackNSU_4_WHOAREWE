import {
    supabase
} from "./supabaseClient";


// users
// add user
async function addAuth0UserToDatabase(user) {

    let newUser = {
        userID: user.sub,
        auth0Info: user,
        name: user.nickname,
        specialType: null, // can be STUDENT
        isPremium: false,
    };
    const { data, error } = await supabase.from('users').insert([newUser]);
    return { data, error };
}

// retrieve user
async function getUserWithAuth0ID(auth0ID) {
    const { data, error } = await supabase.from('users').select('*').eq('userID', auth0ID);
    return { data, error };
}


async function getComplaintsOfBus(busID)
{
    const {data, error } = await supabase.from('complaints').select('*').eq('busID', busID);
    return {data, error};
}

async function addComplaintToDatabase(complainID, busID, title, details, timestamp)
{
    let complaint = {
        complainID: complainID,
        busID: busID,
        title: title,
        details: details, // can be STUDENT
        timestamp: timestamp,
    };
    const { data, error } = await supabase.from('complaints').insert([complaint]);
    return { data, error };

}

async function getFeedback()
{
    const {data, error} = await supabase.from('feedbacks').select('*');
    return {data, error};
}

async function addFeedbackToDatabase(feedbackID, userID, details, timestamp)
{
    let feedbacks = {
        feedbackID: feedbackID,
        userID: userID,
        details: details,
        timestamp: timestamp
    };
    const { data, error } = await supabase.from('feedbacks').insert([feedbacks]);
    return { data, error };
}

async function getBus(busID)
{
    const { data, error } = await supabase.from('buses').select('*').eq('busID', busID);
    return {data, error};
}

async function addBusToDatabase(busID, busName, lattitude, longitude, busLicense, ownerID)
{
    let buses = {
        busID: busID,
        busName: busName,
        lattitude: lattitude,
        longitude: longitude,
        busLicense: busLicense,
        ownerID: ownerID,
    };
    const { data, error } = await supabase.from('buses').insert([buses]);
    return {data, error};
}


export {
    addAuth0UserToDatabase,
    getUserWithAuth0ID,

    addComplaintToDatabase,
    getComplaintsOfBus,

    getFeedback,
    addFeedbackToDatabase,

    getBus,
    addBusToDatabase,
}
