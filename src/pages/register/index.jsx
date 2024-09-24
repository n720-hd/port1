
export default function Register(){
    return (
     <>
         <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
     </>
    )
}