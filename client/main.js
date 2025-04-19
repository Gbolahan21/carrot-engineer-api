document.querySelector('#fetchData').addEventListener('click', fetchData)

async function fetchData() {

    const engineerName = document.querySelector('#engineerData').value;

    try {
        const response = await fetch(`http://localhost:2025/api/${engineerName}`)
        const data = await response.json()
        document.querySelector('#showData').innerText = `\n Name: ${data.name} \n Role:  ${data.role}`;
        setTimeout(() => {
            document.querySelector('#engineerData').value = ''
            document.querySelector('#showData').innerText = ''
        }, 3000)
    } catch (error) {
        console.log(error)
    }
}