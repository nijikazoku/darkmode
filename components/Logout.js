const Logout = ({ isLogin, handleLogin }) => {
  return (
    <>
      {isLogin && (
        <div className="py-1 text-red-600 text-center underline mx-auto underline-offset-4">
          <span onClick={handleLogin} className="inline-block underline">
            ログアウト
          </span>
        </div>
      )}
    </>
  );
};

export default Logout;
