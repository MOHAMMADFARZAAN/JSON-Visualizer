








app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json());
app.use('/user', userRouter);