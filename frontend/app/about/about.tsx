
export default function About() {

    return (
        <div className=''>
            <div className='flex justify-center items-center'>
                <div className='xl:text-3xl'>
                    ABOUT
                </div>
            </div>
            <div className='grid grid-cols-2 px-48 py-24'>
                <div className='px-20 border-r border-harrods-gold'>
                    <img src='/images/profile/kuma.jpg' width={'60%'} className='mt-0 mr-0 mb-0 ml-auto'></img>
                </div>
                <div className='px-20'>
                    <div className='text-xl'>
                        <div className='pb-5'>
                            <div className='text-3xl'>
                                経歴
                            </div>
                            <div className='text-xl py-2'>
                                <p>1992　		千葉県生まれ</p>
                                <p>2015　		東京藝術大学美術学部建築科 卒業</p>
                                <p>2015-2016	Boyarsky Murphy Architects(London)</p>
                                <p>2016-2017	中山英之建築設計事務所</p>
                                <p>2020		東京大学大学院工学研究科 建築学専攻 修了</p>
                                <p>現在、同博士課程</p>
                                <p>2024		WAREHOUSE設立</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className='text-3xl'>
                                資格
                            </div>
                            <div className='text-xl py-2'>
                                <p>一級建築士(登録：号)</p>
                            </div>
                        </div>
                        <div className='py-5'>
                            <div className='text-3xl'>
                                出版等
                            </div>
                            <div className='text-xl py-2'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}