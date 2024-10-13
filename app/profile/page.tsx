
import { members } from '@wix/members';
import { wixClientServer } from '../lib/WixClientServer'
import Link from 'next/link';
import { format } from 'timeago.js';
import { updateUser } from '../lib/action';
import UpdateButton from '../components/UpdateButton/UpdareButton';


const ProfilePage = async() => {

    const wixClient = await wixClientServer();

    let user;
    try {
      user = await wixClient.members.getCurrentMember({
        fieldsets: [members.Set.FULL],
      });
    } catch (error) {
      console.error("Error fetching current member:", error);
      return <div>Error loading profile. Please try again later.</div>;
    }
  

    console.log(user);
    
    if (!user.member?.contactId) {
     return <div>Not Logged in</div>
    }

    const orderRes = await wixClient.orders.searchOrders({
      search:{filter:{"buyerInfo.contactId":{$eq:user.member?.contactId}}}
    })

  return (
    <div className='flex flex-col md:flex-row gap-24 md:h-[calc(100vh - 180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <div className='w-full md:w-1/2'>
      <h1 className='text-2xl'>Profile</h1>
      <form action={updateUser} className='mt-12 flex flex-col gap-4'>
      <input type='text' hidden name='id' value={user.member.contactId}/>
      <label className='text-sm text-gray-700'>Username</label>
       <input 
       type="text" 
       name='lastname'
       placeholder={user.member?.profile?.nickname || "Doe"}
       className='ring-1 ring-gray-300 rounded-md p-2 max-w-96'
       />


       <label className='text-sm text-gray-700'>First Name</label>
       <input 
       type="text" 
       name='username'
       placeholder={user.member?.profile?.nickname || "john"}
       className='ring-1 ring-gray-300 rounded-md p-2 max-w-96'
       />

      <label className='text-sm text-gray-700'>Surname</label>
       <input 
       type="text" 
       name='firstname'
       placeholder={user.member?.profile?.nickname || "john"}
       className='ring-1 ring-gray-300 rounded-md p-2 max-w-96'
       />


      <label className='text-sm text-gray-700'>Phone</label>
       <input 
       type="text" 
       name='firstname'
       placeholder={user.member?.contact?.phones && user.member?.contact?.phones[0] || "+123456"}
       className='ring-1 ring-gray-300 rounded-md p-2 max-w-96'
       />


       <label className='text-sm text-gray-700'>E-mail</label>
       <input 
       type="text" 
       name='firstname'
       placeholder={user.member?.loginEmail ||  "johndae@gmail.com"}
       className='ring-1 ring-gray-300 rounded-md p-2 max-w-96'
       />

      <UpdateButton/>
      </form>
      </div>
      <div className='w-full md:w-1/2'>
        <h1 className='text-2xl'>Orders</h1>
        <div className='mt-12 flex flex-col'>
        {orderRes.orders.map(order => (
          <Link 
          href={`/orders/${order._id}`} 
          key={order._id}
          className='flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100'
          >
           <span>{order._id?.substring(0,10)}...</span>
           <span>{order.priceSummary?.subtotal?.amount}</span>
           {order._createdDate && <span className='w-1/4'>{format(order._createdDate)}</span>}
           <span className='w-1/4'>{order.status}</span>
          </Link>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
