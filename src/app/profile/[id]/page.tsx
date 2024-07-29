
function UserPage({params}:any) {
  return (
    <div className='p-2 flex flex-col items-center justify-center min-h-screen py-2 gap-2'>
        <h1>Profile</h1>
        <hr/>
        <p className="text-4xl ">Profile page {params.id}</p>
    </div>
  )
}

export default UserPage