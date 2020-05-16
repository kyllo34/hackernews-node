async function signup(parent, args, context, info) {
  const hashedPassword = await bcrypt.has(args.password, 10)
  const { pasword, ...user } = await context.prisma.createUser({ ...args, pasword: hashedPassword })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const { password, ...user } = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const 
}