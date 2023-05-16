import { GiGardeningShears } from 'react-icons/gi'
import { BsFillHousesFill } from 'react-icons/bs'
import { RiMentalHealthFill } from 'react-icons/ri'
import { TbForklift, TbTruckDelivery } from 'react-icons/tb'
import { MdConstruction, MdMedicalServices } from 'react-icons/md'
import { BsQuestionCircle } from 'react-icons/bs'


const ServiceData = [
    { id: 1, icon: <GiGardeningShears/>, title: 'Gardening' },
    { id: 2, icon: <BsFillHousesFill/>, title: 'Housework' },
    { id: 3, icon: <RiMentalHealthFill/>, title: 'Mental Support' },
    { id: 4, icon: <TbForklift/>, title: 'Heavy Lifting' },
    { id: 5, icon: <TbTruckDelivery/>, title: 'Delivery' },
    { id: 6, icon: <MdConstruction/>, title: 'Construction' },
    { id: 7, icon: <MdMedicalServices/>, title: 'Medical Support' },
    { id: 8, icon: <BsQuestionCircle/>, title: 'Others' }
]

export default ServiceData