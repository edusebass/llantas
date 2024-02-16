export const filterLlantas = (
    llantas: Llanta[] | null,
    filterData: { ancho: string; altura: string; rin: string; }
) => {
    // Verifica si el array de llantas es nulo, en ese caso retorna un array vacío
    if (!llantas) {
        return [];
    };

    // Filtra el array de llantas utilizando los criterios definidos en filterData
    return llantas.filter((
        llanta: { ancho: number; altura: number; rin: number; }
    ) => {
        // Compara el ancho de la llanta con el valor especificado en filterData.ancho
        const anchoMatch =
            filterData.ancho === '' ?
                true : llanta.ancho === +filterData.ancho;

        // Compara la altura de la llanta con el valor especificado en filterData.altura
        const alturaMatch =
            filterData.altura === '' ?
                true : llanta.altura === +filterData.altura;

        // Compara el rin de la llanta con el valor especificado en filterData.rin
        const rinMatch =
            filterData.rin === '' ?
                true : llanta.rin === +filterData.rin;

        // Retorna true si todas las condiciones coinciden, lo que significa que la llanta pasa el filtro
        return anchoMatch && alturaMatch && rinMatch;
    });
};
