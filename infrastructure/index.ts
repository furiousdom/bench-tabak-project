import * as aws from "@pulumi/aws";

export const vpc = new aws.ec2.Vpc("pulumi-demo-vpc", {
  cidrBlock: "10.0.0.0/16",
  enableDnsSupport: true,
  enableDnsHostnames: true,
  tags: {
    Name: "pulumi-demo-vpc",
  },
});
