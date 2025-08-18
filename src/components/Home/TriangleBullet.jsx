function TriangleBullet(params) {
    return (
    <span
                    className="block w-[18px] h-[18px] bg-gradient-to-tr from-red-600 to-black"
                    style={{
                        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
                    }}
                ></span>
    );
}
export default TriangleBullet;