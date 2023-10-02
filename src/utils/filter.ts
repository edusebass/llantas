export const filterLlantas = (
    llantas: Llanta[] | null,
    filterData: { ancho: string; altura: string; rin: string; }
) => {
    if (!llantas) {
        return [];
    };

    return llantas.filter((
        llanta: { ancho: number; altura: number; rin: number; }
    ) => {
        const anchoMatch =
            filterData.ancho === '' ?
                true : llanta.ancho === +filterData.ancho;

        const alturaMatch =
            filterData.altura === '' ?
                true : llanta.altura === +filterData.altura;

        const rinMatch =
            filterData.rin === '' ?
                true : llanta.rin === +filterData.rin;

        return anchoMatch && alturaMatch && rinMatch;

    });
};