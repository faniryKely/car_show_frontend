import Image from 'next/image';
        import Link from 'next/link';

export default function Card(){     
            return (
                <div>
                    <div className="card" style={{ width: '18rem' }}>
                        <Image src="/path/to/image.jpg" className="card-img-top" alt="Image description" width={288} height={162} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link href="#">
                                <a className="btn btn-primary">Learn more</a>
                            </Link>
                        </div>
                    </div>
                </div>
            )
}