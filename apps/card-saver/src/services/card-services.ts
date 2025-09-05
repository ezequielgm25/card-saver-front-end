const API_URL = "http://localhost:5167/api/cards"; // cambia puerto si es otro

// adding card function 
export async function addCard(card: any) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });
  return response.json();
}

// getting card function 
export async function getCards() {
  const response = await fetch(API_URL);
  return response.json();
}