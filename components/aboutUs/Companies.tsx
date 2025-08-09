import Image from 'next/image'
import React from 'react'

const Companies = () => {
    return (
        <section className='w-full bg-white '>
            <div className='flex justify-between px-8 py-8 max-md:flex-wrap max-md:justify-center xl:max-w-[1300px] xl:mx-auto'>
                <Image
                    src={"/images/partners_01.png"}
                    alt=''
                    width={150}
                    height={150}
                />
                <Image
                    src={"/images/partners_02.png"}
                    alt=''
                    width={150}
                    height={150}
                />
                <Image
                    src={"/images/partners_03 .png"}
                    alt=''
                    width={150}
                    height={150}
                />
                <Image
                    src={"/images/partners_04.png"}
                    alt=''
                    width={150}
                    height={150}
                />
                <Image
                    src={"/images/partners_05.png"}
                    alt=''
                    width={150}
                    height={150}
                />
            </div>

        </section>
    )
}

export default Companies
