const Form = () => {
    return (
        <form id="form-student" className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="input-name" className="block font-medium text-gray-700">
                    Fullname
                </label>
                <input
                    type="text"
                    id="input-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div>
                <label htmlFor="input-date" className="block font-medium text-gray-700">
                    Birth Date
                </label>
                <input
                    type="date"
                    id="input-date"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>

            <div>
                <label htmlFor="input-gender" className="block font-medium text-gray-700">
                    Gender
                </label>
                <select
                    id="input-gender"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div>
                <label htmlFor="input-prody" className="block font-medium text-gray-700">
                    Program Study
                </label>
                <select
                    id="input-prody"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                >
                    <option value="Ekonomi">Ekonomi</option>
                    <option value="Manajemen">Manajemen</option>
                    <option value="Akuntansi">Akuntansi</option>
                    <option value="Administrasi Publik">Administrasi Publik</option>
                    <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                    <option value="Hubungan Internasional">Hubungan Internasional</option>
                    <option value="Teknik Sipil">Teknik Sipil</option>
                    <option value="Arsitektur">Arsitektur</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Informatika">Informatika</option>
                    </select>
                </div>
            </div>

            <input
                type="submit"
                id="add-btn"
                value="Add student"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"/>
                
        </form>
    );
};

export default Form;
