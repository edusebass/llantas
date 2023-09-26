import Slash from '../../public/slash.svg';

const buscador = () => {
    return (
    <div className="bg-gray-100 py-5">
        <form className="bg-slate-50 mx-40 rounded-lg shadow-lg">
            <div className="flex justify-center text-xl ">
                <h2 className="pt-4">Busca por medida</h2>
            </div> 
            <div className="flex flex-row justify-center py-5">
                <input type="search" id="search" className=" p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="175" required />
                <img src={Slash} alt="" />
                <input type="search" id="search" className=" p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="70" required />
                <img src={Slash} alt="" />
                <input type="search" id="search" className=" p-4 pl-10 pr-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="13" required />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mx-3 px-4 py-0 ">Buscar</button>
            </div>
            
        </form>
    </div>   

    );
};

export default buscador;