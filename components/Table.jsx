
const Table = (props) => {
    const data = props.students||[];
    return (
        <div className="max-w-4xl mx-auto my-8 overflow-x-auto">
            <table id="table-student" className="min-w-full bg-white border rounded-md shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left text-gray-700">No</th>
                        <th className="p-3 text-left text-gray-700">Full Name</th>
                        <th className="p-3 text-left text-gray-700">Birth Date</th>
                        <th className="p-3 text-left text-gray-700">Gender</th>
                        <th className="p-3 text-left text-gray-700">Faculty</th>
                        <th className="p-3 text-left text-gray-700">Program Study</th>
                        <th className="p-3 text-left text-gray-700">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student.id} className="border-t">
                    <td className="p-3">{student.id}</td>
                    <td className="p-3">{student.fullname}</td>
                    <td className="p-3">{student.birthDate}</td>
                    <td className="p-3">{student.gender}</td>
                    <td className="p-3">{student.faculty}</td>
                    <td className="p-3">{student.programStudy}</td>
                    <td><button className="text-red-600 hover:text-red-800">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default Table;
