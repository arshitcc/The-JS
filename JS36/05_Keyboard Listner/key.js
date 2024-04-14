const insertKey = document.querySelector('#insert');

window.addEventListener('keydown', (event) => {
    
    // Table is hell in Tailwind

    insertKey.innerHTML = `
    
    <table class = "text-white border border-black border-separate text-3xl text-center">
        <tr class = "font-bold">
            <th class="border border-slate-600">Key</th>
            <th class="border border-slate-600">KeyCode</th>
            <th class="border border-slate-600">Code</th>
        </tr>
        <tr>
            <td class="border border-slate-600">${event.key === ' '? "Space" : event.key}</td>
            <td class="border border-slate-600">${event.keyCode}</td>
            <td class="border border-slate-600">${event.code}</td>
        </tr>
    </table>

    `
})