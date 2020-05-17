import { models } from "../generated/prisma-client"

function postedBy(parent, args, context) {
  return context.prisma.link({ id: parent.id }).postedBy()
}

models.exports = {
  postedBy,
}